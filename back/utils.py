import cv2
import numpy as np
import torch
from torchvision import transforms
import torch.nn.functional as nnf
from PIL import Image

# Declare classes
classes = [
    "Apple Braeburn",
    "Apple Crimson Snow",
    "Apple Golden 1",
    "Apple Golden 2",
    "Apple Golden 3",
    "Apple Granny Smith",
    "Apple Pink Lady",
    "Apple Red 1",
    "Apple Red 2",
    "Apple Red 3",
    "Apple Red Delicious",
    "Apple Red Yellow 1",
    "Apple Red Yellow 2",
    "Apricot",
    "Avocado",
    "Avocado ripe",
    "Banana",
    "Banana Lady Finger",
    "Banana Red",
    "Beetroot",
    "Blueberry",
    "Cactus fruit",
    "Cantaloupe 1",
    "Cantaloupe 2",
    "Carambula",
    "Cauliflower",
    "Cherry 1",
    "Cherry 2",
    "Cherry Rainier",
    "Cherry Wax Black",
    "Cherry Wax Red",
    "Cherry Wax Yellow",
    "Chestnut",
    "Clementine",
    "Cocos",
    "Corn",
    "Corn Husk",
    "Cucumber Ripe",
    "Cucumber Ripe 2",
    "Dates",
    "Eggplant",
    "Fig",
    "Ginger Root",
    "Granadilla",
    "Grape Blue",
    "Grape Pink",
    "Grape White",
    "Grape White 2",
    "Grape White 3",
    "Grape White 4",
    "Grapefruit Pink",
    "Grapefruit White",
    "Guava",
    "Hazelnut",
    "Huckleberry",
    "Kaki",
    "Kiwi",
    "Kohlrabi",
    "Kumquats",
    "Lemon",
    "Lemon Meyer",
    "Limes",
    "Lychee",
    "Mandarine",
    "Mango",
    "Mango Red",
    "Mangostan",
    "Maracuja",
    "Melon Piel de Sapo",
    "Mulberry",
    "Nectarine",
    "Nectarine Flat",
    "Nut Forest",
    "Nut Pecan",
    "Onion Red",
    "Onion Red Peeled",
    "Onion White",
    "Orange",
    "Papaya",
    "Passion Fruit",
    "Peach",
    "Peach 2",
    "Peach Flat",
    "Pear",
    "Pear 2",
    "Pear Abate",
    "Pear Forelle",
    "Pear Kaiser",
    "Pear Monster",
    "Pear Red",
    "Pear Stone",
    "Pear Williams",
    "Pepino",
    "Pepper Green",
    "Pepper Orange",
    "Pepper Red",
    "Pepper Yellow",
    "Physalis",
    "Physalis with Husk",
    "Pineapple",
    "Pineapple Mini",
    "Pitahaya Red",
    "Plum",
    "Plum 2",
    "Plum 3",
    "Pomegranate",
    "Pomelo Sweetie",
    "Potato Red",
    "Potato Red Washed",
    "Potato Sweet",
    "Potato White",
    "Quince",
    "Rambutan",
    "Raspberry",
    "Redcurrant",
    "Salak",
    "Strawberry",
    "Strawberry Wedge",
    "Tamarillo",
    "Tangelo",
    "Tomato 1",
    "Tomato 2",
    "Tomato 3",
    "Tomato 4",
    "Tomato Cherry Red",
    "Tomato Heart",
    "Tomato Maroon",
    "Tomato Yellow",
    "Tomato not Ripened",
    "Walnut",
    "Watermelon",
]

# Declare function - image_resize()
def image_resize(image):
    top = bottom = left = right = diff = 0
    (h, w) = image.shape[:2]

    if w > h:
        diff = w - h
        top = int(diff/2)
        bottom = int(diff/2)
    else:
        diff = h - w
        left = int(diff/2)
        right = int(diff/2)

    image = cv2.copyMakeBorder(image, top, bottom, left, right, cv2.BORDER_CONSTANT, None, value = (255, 255, 255))
    resized = cv2.resize(image, (256, 256), interpolation = cv2.INTER_AREA)

    return resized

# Declare function - preprocessing()
def preprocessing(path):
    # Step 1: Read image
    image_vec = cv2.imread(path, 1)

    # Step 2: Get image area
    img_area = image_vec.shape[0] * image_vec.shape[1]

    # Step 3: GaussianBlur
    g_blurred = cv2.GaussianBlur(image_vec, (5, 5), 0)

    # Step 4: Edge Detection
    blurred_float = g_blurred.astype(np.float32) / 255.0
    edgeDetector = cv2.ximgproc.createStructuredEdgeDetection("./models/model.yml.gz")
    edges = edgeDetector.detectEdges(blurred_float) * 255.0
    cv2.imwrite("1_EDGE.jpg", edges)

    # Step 5: Read edge imagen
    img = cv2.imread("./1_EDGE.jpg", 1)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Step 6: Closing: dilation followed by Erosion
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))

    closing = cv2.morphologyEx(gray, cv2.MORPH_CLOSE, kernel)
    closing = cv2.erode(closing, kernel)

    # Step 7: Find contours
    contours = []
    cnt, _ = cv2.findContours(closing, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Step 8: Loop contours and append them to contours list
    for i in range(len(cnt)):
        contours.append(cnt[i])

    # Step 9: Sort contours by area (from largest to smallest)
    sorted_contours= sorted(contours, key=cv2.contourArea, reverse=True)

    # Step 10: Create black background
    img_contours = np.zeros(image_vec.shape[:2], dtype='uint8')

    # Step 11: Draw contour in black background
    cv2.drawContours(img_contours, sorted_contours, 0, (255, 255, 255), -1)
    cv2.imwrite("2_CONTOUR.jpg", img_contours)

    # Step 12: Insert original image in black contour image
    fg = cv2.bitwise_or(image_vec, image_vec, mask=img_contours)
    cv2.imwrite("3_CONTOUR_BLACK.jpg", fg)

    # Step 13: Insert original image in white contour image
    mask = cv2.bitwise_not(img_contours)
    background = np.full(image_vec.shape, 255, dtype=np.uint8)
    bk = cv2.bitwise_or(background, background, mask=mask)
    cv2.imwrite("4_CONTOUR_WHITE.jpg", bk)

    # Step 14: combine foreground+background
    fg_bk = cv2.bitwise_or(fg, bk)
    cv2.imwrite("5_PROCESSED.jpg", fg_bk)

    # Step 15: Crop the image
    y, x = np.where(bk[:, :, 0] == 0)
    y_min, y_max, x_min, x_max = min(y), max(y), min(x), max(x)
    final = fg_bk[y_min:y_max, x_min:x_max]
    cv2.imwrite("6_FINAL.jpg", final)

    # Step 16: Resize image
    final = image_resize(final)
    print(final.shape)

    return final

# Declare function - pred()
def pred(img_path):
    model = torch.jit.load("./models/fruits-360-efficientnet_b0.zip")

    transform = transforms.Compose(
        [
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225)),
        ]
    )

    # Step 1: Preprocessing image
    img = preprocessing(img_path)
    im_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = Image.fromarray(im_rgb)

    # Step 2: Transform image
    input = transform(img)

    # Step 3: Unsqueeze batch dimension
    input = input.unsqueeze(0)

    # Step 4: Set model to eval
    model.eval()

    # Step 5: Get prediction
    output = model(input)

    # Step 6: Get max probability
    prob = nnf.softmax(output, dim=1)
    prob = float(prob.max() * 100)

    # Step 7: Get predicted class
    _, pred = torch.max(output, 1)
    prediction = classes[pred]

    return prob, prediction
