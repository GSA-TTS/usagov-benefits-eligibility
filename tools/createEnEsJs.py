import os

LANGUAGE = "en"

ignoreFiles = [
    ".DS_Store",
]


def lang():
    allFiles = {"agencies": [], "benefits": [], "life-events": [], "types": []}
    jsonDir = "./locales/" + LANGUAGE + "/"
    files = os.listdir(jsonDir)
    for file in files:
        if file in ignoreFiles:
            continue
        else:
            if "." not in file:
                moreFiles = os.listdir(os.path.join(jsonDir, file))
                for moreFile in moreFiles:
                    if moreFile in ignoreFiles:
                        continue
                    else:
                        allFiles[file].append(
                            {"path": os.path.join(jsonDir, file, moreFile)}
                        )
            else:
                allFiles[file] = {"path": os.path.join(jsonDir, file)}

    lines = [
        "export default Object.assign({}, \n",
    ]
    for fileOrDir in allFiles:
        if "." in fileOrDir:
            line = 'require("./' + os.path.join(LANGUAGE, fileOrDir) + '"),\n'
            lines.append(line)
        else:
            for file in allFiles[fileOrDir]:
                filePath = file["path"].split("/")[-1]
                line = (
                    'require("./'
                    + os.path.join(LANGUAGE, fileOrDir, filePath)
                    + '"),\n'
                )
                lines.append(line)
    lines.append(")")

    with open("./locales/" + LANGUAGE + ".js", "w") as f:
        f.writelines(lines)
        f.close()


lang()
LANGUAGE = "es"
lang()
