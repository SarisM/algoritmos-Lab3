// import  {workers} from './data/data'
// import * as components from './Components/indexPadre' ;
// import Filter, {Attribute} from './Components/MyComponent/myComponent';

// class AppContainer extends HTMLElement  {
//     workersList: Filter[] = []
    
//     constructor()  {
//         super();
//         this.attachShadow( {mode: 'open'});
//         workers.forEach(worker=>  {
//             const workerFilter = this.ownerDocument.createElement("component-worker") as Filter;
//             workerFilter.setAttribute(Attribute.image, worker.image);
//             workerFilter.setAttribute(Attribute.name, worker.name);
//             workerFilter.setAttribute(Attribute.uid, String(worker.id));
//             workerFilter.setAttribute(Attribute.age, String(worker.age));
//             workerFilter.setAttribute(Attribute.gender, worker.gender);
//             workerFilter.setAttribute(Attribute.area, worker.jobDetails.area);
//             workerFilter.setAttribute(Attribute.position, worker.jobDetails.position);
//             workerFilter.setAttribute(Attribute.timeincompany, String(worker.jobDetails.timeInCompany));
//             workerFilter.setAttribute(Attribute.experience, String(worker.jobDetails.experience));
//             this.workersList.push(workerFilter);
//         })
//     }

//     connectedCallback() {
       
//         this.render();
        
//     }

//     render()  {

//         //si si se creo un shadowroot creame lo siguiente 
//         if (this.shadowRoot) {
//             this.shadowRoot.innerHTML = `
//             <link rel="stylesheet" href="../src/components/myComponent/component.css">
//             <h1 id="title">WORKERS</h1>
//             <div class="container"></div>
//             `;

//         };
        
//         const filterWorkers = this.workersList.filter((worker) =>(worker.uid) && worker.uid %2 ==0)

//         const container = this.shadowRoot?.querySelector('.container')
        
//         filterWorkers.forEach((worker) =>  {
//             container?.appendChild(worker);
//         });
       
//     }

// }

// customElements.define('app-container',AppContainer);

import { workers } from './data/data';
import Filter, { Attribute } from './Components/MyComponent/myComponent';

class AppContainer extends HTMLElement {
    workersList: Filter[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Aplicamos el filtro para obtener solo los trabajadores con ID par
        const filteredWorkers = workers.filter(worker => worker.id % 2 === 0);

        filteredWorkers.forEach(worker => {
            const workerFilter = this.ownerDocument.createElement("component-worker") as Filter;
            workerFilter.setAttribute(Attribute.image, worker.image);
            workerFilter.setAttribute(Attribute.name, worker.name);
            workerFilter.setAttribute(Attribute.uid, String(worker.id));
            workerFilter.setAttribute(Attribute.age, String(worker.age));
            workerFilter.setAttribute(Attribute.gender, worker.gender);
            workerFilter.setAttribute(Attribute.area, worker.jobDetails.area);
            workerFilter.setAttribute(Attribute.position, worker.jobDetails.position);
            workerFilter.setAttribute(Attribute.timeincompany, String(worker.jobDetails.timeInCompany));
            workerFilter.setAttribute(Attribute.experience, String(worker.jobDetails.experience));
            this.workersList.push(workerFilter);
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            // Limpia el contenido del shadowRoot
            this.shadowRoot.innerHTML = `
             <link rel="stylesheet" href="../src/styles.css">
                <div id="workers-container"></div>
            `;

            const container = this.shadowRoot.querySelector("#workers-container");

            // Añade cada tarjeta de trabajador filtrado al contenedor
            this.workersList.forEach(worker => {
                if (container) {
                    container.appendChild(worker);
                }
            });
        }
    }
}

customElements.define('app-container', AppContainer);
export default AppContainer;
