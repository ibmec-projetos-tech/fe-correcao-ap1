biblioteca = {
    'Books': {
        'Harry Potter': {
            'Author': 'JK Rolling',
            'Gender': 'Fantasy',
            'PublicationYear': '1998',
        },
        'Bible': {
            'Author': 'Lord God',
            'Gender': 'Its own',
            'PublicationYear': 'Long time ago',
        },
        'AnotherOne': {
            'Author': 'Mateus Fenoci',
            'Gender': 'None',
            'PublicationYear': '2024',  
        }
    },
    
}

function addNewBook(Title, Author, Gender, PublicationYear) {
    biblioteca.Books[Title] = {'Author': Author, 'Gender': Gender, 'PublicationYear': PublicationYear}

}

function showBooks() {
    console.log(biblioteca.Books)

}

