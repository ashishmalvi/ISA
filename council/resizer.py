from PIL import Image
from os import listdir
import os
for file in listdir(os.getcwd()):
	if ".jpg" in file or ".png" in file:
		print file
		im = Image.open(file)
		im = im.resize((1500,1000))
		im.save("resized_"+file)