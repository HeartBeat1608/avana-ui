import json
from random import sample
import string

first_names = ['Rajesh', 'Ramesh', 'Sam', 'Sameer', 'Vicky', 'Raju', 'Pavan', 'Chandu']
last_names = ['Sharma', 'Verma', 'White', 'Srivastava', 'Yadav', 'Pandit']
status_modes = ['Active', 'Pending', 'Resolved']


def genId():
    return ''.join(sample(string.hexdigits, 8))


def genName():
    fname = sample(first_names, 1)[0]
    lname = sample(last_names, 1)[0]
    return ' '.join([fname, lname])


def genStatus():
    return sample(status_modes, 1)[0]


dev = json.load(open('tableDataDevelopment.json'))
newDev = []

for row in dev:
    row["ticket"] = genId()
    row['name'] = genName()
    row['status'] = genStatus()
    newDev.append(row)

json.dump(newDev, open('tableDataDevelopment.clean.json', "w+"))
