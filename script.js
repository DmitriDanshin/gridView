const dataExample = [
    {
        company: '<b>Google</b>',
        chef: '',
        country: 'USA',
        age: 43
    },
    {
        company: 'Facebook',
        chef: '',
        country: 'USA',
        age: 34
    },
    {
        company: 'Yandex',
        chef: '',
        country: 'Russia',
        age: 59
    },
    {
        company: 'Amazon',
        chef: '',
        country: 'USA',
        age: 60
    },
    {
        company: 'BMW',
        chef: '',
        country: 'Germany',
        age: 20
    }
];

const gridView = new GridView();
gridView.header = 'GridView';
gridView.headerClass = ['header', 'site-header'];
gridView.data = dataExample;

gridView.attributes = {
    'company': {
        'label': 'Компания',
        'src': 'html',
    },
    'chef': {
        'label': 'Директор',
        'src': 'html'
    },
    'age': {
        'label': 'Возраст',
    },
    'country': {
        'label': 'Страна',
    }
};

gridView.render();
