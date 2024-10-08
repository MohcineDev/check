const arr1 = Object.freeze([
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
])


function filterShortStateName(arr) {
    return arr.filter(elem => elem.length < 7)
}

function filterStartVowel(arr) {
    return arr.filter(elem => /^[aeiou]/i.test(elem))
    // return arr.filter(elem => elem[0] == "a" || elem[0] == "e" || elem[0] == "i" || elem[0] == "o" || elem[0] == "u")
}


function filter5Vowels(arr) {
    return arr.filter(elem => check5Vowels(elem))
}

function check5Vowels(elem) {
    let count = 0
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] == "a" || elem[i] == "e" || elem[i] == "i" || elem[i] == "o" || elem[i] == "u") {
            count++
        }
    }
    return count >= 5 ? true : false
}

function filter1DistinctVowel(arr) {
    return arr.filter(elem => for1DistinctVowel(elem))
}


function for1DistinctVowel(elem) {
    let count = 0

    elem.includes('a') ? count++ : null
    elem.includes('e') ? count++ : null
    elem.includes('i') ? count++ : null
    elem.includes('o') ? count++ : null
    elem.includes('u') || elem.includes('U') ? count++ : null
    if (count > 1) {
        return false
    }
    return true


}

const arr2 = Object.freeze(
    [
        { tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
        { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
        { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
        { tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
        { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
        { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
        {
            tag: 'CT',
            name: 'Connecticut',
            capital: 'Hartford',
            region: 'Northeast',
        },
        { tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
        {
            tag: 'DC',
            name: 'District Of Columbia',
            capital: 'Washington',
            region: 'South',
        },
        { tag: 'FL', name: 'Florida', capital: 'Tallahassee', region: 'South' },
        { tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
        { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
        { tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
        {
            tag: 'IL',
            name: 'Illinois',
            capital: 'Springfield',
            region: 'Midwest',
        },
        {
            tag: 'IN',
            name: 'Indiana',
            capital: 'Indianapolis',
            region: 'Midwest',
        },
        { tag: 'IA', name: 'Iowa', capital: 'Des Moines', region: 'Midwest' },
        { tag: 'KS', name: 'Kansas', capital: 'Topeka', region: 'Midwest' },
        { tag: 'KY', name: 'Kentucky', capital: 'Frankfort', region: 'South' },
        { tag: 'LA', name: 'Louisiana', capital: 'Baton Rouge', region: 'South' },
        { tag: 'ME', name: 'Maine', capital: 'Augusta', region: 'Northeast' },
        { tag: 'MD', name: 'Maryland', capital: 'Annapolis', region: 'South' },
        {
            tag: 'MA',
            name: 'Massachusetts',
            capital: 'Boston',
            region: 'Northeast',
        },
        { tag: 'MI', name: 'Michigan', capital: 'Lansing', region: 'Midwest' },
        { tag: 'MN', name: 'Minnesota', capital: 'St. Paul', region: 'Midwest' },
        { tag: 'MS', name: 'Mississippi', capital: 'Jackson', region: 'South' },
        {
            tag: 'MO',
            name: 'Missouri',
            capital: 'Jefferson City',
            region: 'Midwest',
        },
        { tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
        { tag: 'NE', name: 'Nebraska', capital: 'Lincoln', region: 'Midwest' },
        { tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
        {
            tag: 'NH',
            name: 'New Hampshire',
            capital: 'Concord',
            region: 'Northeast',
        },
        {
            tag: 'NJ',
            name: 'New Jersey',
            capital: 'Trenton',
            region: 'Northeast',
        },
        { tag: 'NM', name: 'New Mexico', capital: 'Santa Fe', region: 'West' },
        { tag: 'NY', name: 'New York', capital: 'Albany', region: 'Northeast' },
        {
            tag: 'NC',
            name: 'North Carolina',
            capital: 'Raleigh',
            region: 'South',
        },
        {
            tag: 'ND',
            name: 'North Dakota',
            capital: 'Bismarck',
            region: 'Midwest',
        },
        { tag: 'OH', name: 'Ohio', capital: 'Colombus', region: 'Midwest' },
        {
            tag: 'OK',
            name: 'Oklahoma',
            capital: 'Oklahoma City',
            region: 'South',
        },
        { tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
        {
            tag: 'PA',
            name: 'Pennsylvania',
            capital: 'Harrisburg',
            region: 'Northeast',
        },
        {
            tag: 'RI',
            name: 'Rhode Island',
            capital: 'Providence',
            region: 'Northeast',
        },
        {
            tag: 'SC',
            name: 'South Carolina',
            capital: 'Columbia',
            region: 'South',
        },
        { tag: 'SD', name: 'South Dakota', capital: 'Pierre', region: 'Midwest' },
        { tag: 'TN', name: 'Tennessee', capital: 'Nashville', region: 'South' },
        { tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
        { tag: 'UT', name: 'Utah', capital: 'Salt Lake City', region: 'West' },
        {
            tag: 'VT',
            name: 'Vermont',
            capital: 'Montpelier',
            region: 'Northeast',
        },
        { tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
        { tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
        {
            tag: 'WV',
            name: 'West Virginia',
            capital: 'Charleston',
            region: 'South',
        },
        { tag: 'WI', name: 'Wisconsin', capital: 'Madison', region: 'Midwest' },
        { tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },
    ].map((e) => Object.freeze(e)))



function multiFilter(arr) {
     return arr.filter(elem => forMultiFilter_Capital(elem.capital) && forMultiFilter_Name(elem.name)  && forMultiFilter_Tag(elem.tag) && forMultiFilter_Region(elem.region))
    //
}

console.log(multiFilter(arr2));

function forMultiFilter_Capital(elem) {
    return elem.length >= 8
}
function forMultiFilter_Name(elem) {
    // return elem[0] != "a" && elem[0] != "e" && elem[0] != "i" && elem[0] != "o" && elem[0] != "u"
    return !/^[aeiuo]/ig.test(elem)
}
function forMultiFilter_Tag(elem) {
    return /[aeiuo]/ig.test(elem)
}

function forMultiFilter_Region(elem) {
    return elem != "South"
}

