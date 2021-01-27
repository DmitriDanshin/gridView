class GridView {
    /*
        properties
        @param [array] _tableClass - css classes
        @param [array] data - input data
        @param [array] attributes - output from input data
        @param [array] _element - output of table
        @param _header - header of table
        @param [array] _headerClass - css classes of header

     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attributes = {};

    }

    // Method set header

    set header(header) {
        if (typeof header === 'string' && header.trim() !== '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    // Method set headerClass

    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    set element(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false
    }

    set tableClass(tableClass){
        if (tableClass){
            this._tableClass = tableClass;
        }
    }

    // Method for show GridViewTable
    render() {

        // show header
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            header.classList.add(...this._headerClass);
            document.querySelector(this._element).append(header);
        }

        // show table
        const table = document.createElement('table');
        table.classList.add(...this._tableClass);

        // create table header
        const trHeader = document.createElement('tr');
        const keys = Object.keys(this.attributes);

        keys.forEach(key => {

            const th = document.createElement('th');
            const attributesKey = this.attributes[key];

            if (attributesKey.color) {
                th.style.background = attributesKey.color;
            }
            if (attributesKey.label) {
                th.textContent = attributesKey.label;
            } else {
                th.textContent = key;
            }

            trHeader.append(th);
        });

        table.append(trHeader);
        document.querySelector(this._element).append(table);

        // draw table

        this.data.forEach((item, i, data) => {

            let dataArr = this.data[i]; // string of data
            const tr = document.createElement('tr');
            const keys = Object.keys(this.attributes);

            keys.forEach(key => {

                const td = document.createElement('td');
                let value = dataArr[key];
                const attributesKey = this.attributes[key];

                // src
                if (attributesKey.src) {
                    td.innerHTML = value;
                }
                if (attributesKey.color) {
                    td.style.background = attributesKey.color;
                } else {
                    td.textContent = value;
                }

                tr.append(td);
            });
            table.append(tr);
        });
    }

    addEvent(trigger = 'click', cssClass = ''){

        const selectors = this._tableClass.map(cssClass =>`.${cssClass}`);
        const table = document.querySelector(String(...selectors));

        table.addEventListener(trigger, (event) =>{

            let target = event.target;
            if (target.tagName !== 'TD') return null;
            if(cssClass) target.classList.toggle(cssClass);

        });
    }
}