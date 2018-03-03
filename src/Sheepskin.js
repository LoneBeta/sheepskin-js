// let events = [
//     [{'title':'Test event 1','start':'2018-03-03 09:00:00','end':'2018-03-03 09:03:00','desc':'No Description'}]
// ];

// let resources = [
//     {'name':'Andrew Turnbull'}
// ];

// let calendar = new Sheepskin({container:'Container',events:events})

class Sheepskin {
    constructor(options){
        this.events = options.events || [];
        this.containerDiv = options.container || "Calendar";

        this.build();
    }

    build = () => {
        document.getElementById(this.containerDiv).innerHTML = this.generateHtml();
    }

    generateHtml = () => {
        let html;
        html += this.generateHeaderHtml();
        html += this.generateGutterHtml();
        html += this.generateBodyHtml();

        return html;
    }

    generateBodyHtml = () => {
        let bodyHtml = '<div class="body item"><div class="body-container"><div class="template">';
        this.events.forEach(resource => {
            bodyHtml += '<div class="resource">'+this.generateTimeWindowsHtml()+'</div>';
        });
        bodyHtml += '</div></div></div>';

        return bodyHtml;
    }

    generateResourceTimeWindowsHtml = () => {
        let timeWindowHtml = '';
        for (let i = 0; i < 48; i++) {
            timeWindowHtml += '<div class="thirty-minutes"></div>';
        }
        return timeWindowHtml;
    }

    generateGutterHtml = () => {
        let gutterHtml = '<div class="gutter item"><div class="gutter-container"><div class="hours">';
        for (let i = 0; i < 24; i++) {
            gutterHtml += '<div class="one-hour"></div>';
        }
        gutterHtml += '</div></div></div>';
        
        return gutterHtml;
    }
    
    generateHeaderHtml = () => {
        let headerHtml = '<div class="header item">';

        this.events.forEach(resource => {
            headerHtml += '<div class="resource">'+resource.name+'</div>';
        });
        headerHtml += '</div>';

        return headerHtml;
    }
}
