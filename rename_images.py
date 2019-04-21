import os

dire = "./assets/"

i = 1
for file in os.listdir(dire):
    src = os.path.join(dire, file)
    dst = os.path.join(dire, 'photo-' + str(i) + ".jpg")
    os.rename(src, dst)
    # print(src + " - " + dst)
    i += 1