(()=>{"use strict";const e=[{id:1,name:"Maria Lopez",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:32,gender:"Female",jobDetails:{area:"Sales",position:"Sales Manager",timeInCompany:6,experience:8}},{id:2,name:"Emily Johnson",image:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:28,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Specialist",timeInCompany:3,experience:5}},{id:3,name:"John Smith",image:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:35,gender:"Male",jobDetails:{area:"Finance",position:"Financial Analyst",timeInCompany:4,experience:7}},{id:4,name:"Michael Brown",image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:40,gender:"Male",jobDetails:{area:"IT",position:"Software Developer",timeInCompany:8,experience:12}},{id:5,name:"Sophia Martinez",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:27,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Coordinator",timeInCompany:2,experience:4}},{id:6,name:"Isabella Garcia",image:"https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:31,gender:"Female",jobDetails:{area:"Customer Service",position:"Customer Support Specialist",timeInCompany:4,experience:6}},{id:7,name:"William Taylor",image:"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",age:33,gender:"Male",jobDetails:{area:"Operations",position:"Operations Manager",timeInCompany:5,experience:9}},{id:8,name:"Ethan Wilson",image:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Male",jobDetails:{area:"Research and Development",position:"Research Scientist",timeInCompany:3,experience:5}},{id:9,name:"Olivia Anderson",image:"https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:36,gender:"Female",jobDetails:{area:"Quality Assurance",position:"QA Analyst",timeInCompany:7,experience:10}},{id:10,name:"Emma Brown",image:"https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:30,gender:"Female",jobDetails:{area:"Finance",position:"Financial Advisor",timeInCompany:6,experience:8}},{id:11,name:"James Martinez",image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:25,gender:"Male",jobDetails:{area:"Sales",position:"Sales Representative",timeInCompany:2,experience:3}},{id:12,name:"Alexander Rodriguez",image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:38,gender:"Male",jobDetails:{area:"Operations",position:"Operations Analyst",timeInCompany:9,experience:11}},{id:13,name:"Ava Wilson",image:"https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:26,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Manager",timeInCompany:4,experience:6}},{id:14,name:"Mia Perez",image:"https://images.pexels.com/photos/5878568/pexels-photo-5878568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Manager",timeInCompany:5,experience:7}},{id:15,name:"Daniel Thompson",image:"https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",age:34,gender:"Male",jobDetails:{area:"IT",position:"IT Manager",timeInCompany:7,experience:9}}];var t;!function(e){e.image="image",e.name="name",e.uid="uid",e.age="age",e.gender="gender",e.area="area",e.position="position",e.timeincompany="timeincompany",e.experience="experience"}(t||(t={}));class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.values(t)}attributeChangedCallback(e,i,s){switch(e){case t.uid:this.uid=s?Number(s):void 0;break;case t.age:this.age=s?Number(s):void 0;break;case t.timeincompany:this.timeincompany=s?Number(s):void 0;break;case t.experience:this.experience=s?Number(s):void 0;break;default:this[e]=s}this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/Components/MyComponent/myComponent.css">\n           \n                <div class= "worker">\n                    <div id="photo">\n                        <img id="img" src="${this.image?this.image:"Not found"}">\n                    </div>\n                    <div class="info">\n                        <h1>${this.name?this.name:"Not found"}</h1>\n                        <p><b>ID:</b> ${this.uid?this.uid:"Not found"}</p>\n                        <p><b>Age:</b> ${this.age?this.age:"Not found"}</p>\n                        <p><b>Gender:</b> ${this.gender?this.gender:"Not found"}</p>\n                        <p><b>Area:</b> ${this.area?this.area:"Not found"}</p>     \n                        <p><b>Position:</b> ${this.position?this.position:"Not found"}</p>\n                        <p><b>Time in Company:</b> ${this.timeincompany?this.timeincompany:"Not found"} years</p>\n                        <p><b>Experience:</b> ${this.experience?this.experience:"Not found"} years</p>\n                    </div>\n                </div>\n          \n            `)}}customElements.define("component-worker",i);class s extends HTMLElement{constructor(){super(),this.workersList=[],this.attachShadow({mode:"open"}),e.filter((e=>e.id%2==0)).forEach((e=>{const i=this.ownerDocument.createElement("component-worker");i.setAttribute(t.image,e.image),i.setAttribute(t.name,e.name),i.setAttribute(t.uid,String(e.id)),i.setAttribute(t.age,String(e.age)),i.setAttribute(t.gender,e.gender),i.setAttribute(t.area,e.jobDetails.area),i.setAttribute(t.position,e.jobDetails.position),i.setAttribute(t.timeincompany,String(e.jobDetails.timeInCompany)),i.setAttribute(t.experience,String(e.jobDetails.experience)),this.workersList.push(i)}))}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML='\n             <link rel="stylesheet" href="../src/styles.css">\n                <div id="workers-container"></div>\n            ';const e=this.shadowRoot.querySelector("#workers-container");this.workersList.forEach((t=>{e&&e.appendChild(t)}))}}}customElements.define("app-container",s)})();