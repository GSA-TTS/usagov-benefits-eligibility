import json
import os

localesPath = "./locales/en/"
mdPath = "./content/"

ignoreFiles = [
    ".DS_Store",
    "readme.md",
    "disclaimer.md",
    "criteria.csv",
    "landing-page.md",
]
files = os.listdir(mdPath)

allFiles = {"agencies": [], "benefits": [], "life-events": [], "types": []}

ignoreLines = [
    "criteriaKey",
    "disableGroupKey",
    "disableGroupWhen",
]

for file in files:
    if file in ignoreFiles:
        continue
    else:
        if "." not in file:
            moreFiles = os.listdir(os.path.join(mdPath, file))
            for moreFile in moreFiles:
                if moreFile in ignoreFiles:
                    continue
                else:
                    allFiles[file].append(
                        {"path": os.path.join(mdPath, file, moreFile)}
                    )
        else:
            allFiles[file] = {"path": os.path.join(mdPath, file)}


usedVariables = {}
changedFiles = []
keys = list(allFiles.keys())
for fileOrDir in keys:
    for file in allFiles[fileOrDir]:
        newLines = []
        filePath = file["path"]
        baseTitle = filePath.split("/")[-1].replace(".md", "")
        title = filePath.replace(".md", ".json").replace("./content/", "")
        jsonData = {}
        with open(filePath, "r") as f:
            data = f.readlines()
            for line in data:
                nline = line
                if "link: " in line:
                    link = line.split(": ")[1].replace("\n", "")
                    jsonData[baseTitle + ".source.link"] = link
                    line = line.split(": ")[0] + ": " + baseTitle + ".source.link"
                    newLines.append()
