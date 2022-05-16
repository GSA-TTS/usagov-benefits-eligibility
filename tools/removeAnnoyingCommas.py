import json
import os

localesDir = "./locales/en/"
files = os.listdir(localesDir)

ignoreFiles = [
    ".DS_Store",
    "disclaimer.json",
    "criteria.json",
    "landing-page.json",
    "en.json",
]

allFiles = {"agencies": [], "benefits": [], "life-events": [], "types": []}

for file in files:
    if file in ignoreFiles:
        continue
    else:
        if "." not in file:
            moreFiles = os.listdir(os.path.join(localesDir, file))
            for moreFile in moreFiles:
                if moreFile in ignoreFiles:
                    continue
                else:
                    allFiles[file].append(
                        {"path": os.path.join(localesDir, file, moreFile)}
                    )
        else:
            allFiles[file] = {"path": os.path.join(localesDir, file)}

for fileOrDir in allFiles:
    for file in allFiles[fileOrDir]:
        fileData = {}
        with open(file["path"], mode="r") as f:
            fileData = json.load(f)
            for key in fileData:
                if "," in fileData[key] and "acceptableValues" in key:
                    fileData[key] = fileData[key].replace(",", "")
            f.close()
        json.dump(fileData, open(file["path"], "w"), indent=4)
