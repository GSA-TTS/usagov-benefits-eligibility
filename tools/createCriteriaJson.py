import os, csv, json

criteriaFile = '../content/criteria.csv'

translatedJson = {}
lines = []
with open(criteriaFile, mode='r') as file:
    criteriaFile = csv.reader(file, delimiter=',')
    for row in criteriaFile:
        
        # column 1 is the label
        label = row[1]
        key = 'criteria.'+row[0]
        row[1] = key
        translatedJson[key] = label
        
        # translate the options in the csv
        if row [2] == 'select' or row[2] == 'radio':
            options = row[3].split(';')
            i = 0
            newString = ''
            for val in options:
                jsonKey = 'criteria.'+key+'.values'+str(i)
                translatedJson[jsonKey] = val
                i+=1
                newString = jsonKey + ';' + newString
            row[3] = newString
        lines.append(row)
    file.close()
    
outputFile = '../locales/en/criteria.json'
with open(outputFile, mode='w') as file:
    file.write(json.dumps(translatedJson, indent=4))
    file.close()
    
with open(criteriaFile, mode='w') as file:
    file.writelines(lines)
    file.close()
