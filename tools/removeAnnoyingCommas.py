import os, json

localesDir = './locales/en/'
files = os.listdir(localesDir)

ignoreFiles = [
    ".DS_Store",
    "disclaimer.json",
    "criteria.json",
    "landing-page.json",
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
        with open(file['path'], mode='r+') as f:
            data = json.load(f)
            for key in data:
                if ',' in data[key]:
                    data[key] = data[key].replace(',', '')
            f.write(json.dumps(data, indent=4))
            f.close()
