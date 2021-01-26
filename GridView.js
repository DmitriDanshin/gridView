class GridView {
    /*
        properties
        @param [array] _tableClass - css classes
        @param [array] data - input data
        @param [array] _attributes - output from input data
        @param [array] _element - output of table
        @param _header - header of table
        @param [array] _headerClass - css classes of header
     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attributes = [];

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

    set element(element){
        if(document.querySelector(element)){
            this._element = document.querySelector(element);
            return true;
        }
        return false
    }

    // Method for show GridViewTable
    render() {

    }


}