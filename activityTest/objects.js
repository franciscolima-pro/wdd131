const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex(
            (element)=> element.sectionNum == sectionNum
        );

        if(sectionIndex >= 0){
            this.sections[sectionIndex].enrolled++;
        };
        addSection()
    },
    dropStudent : function (sectionNum){
        const sectionIndex = this.sections.findIndex(
            (element) => element.sectionNum == sectionNum
        )

        if(sectionIndex >= 0){
            this.sections[sectionIndex].enrolled--;
        }
        addSection()
    }
    
  };

  function setNameNumber(){
    const name = document.getElementById('courseName')
    const number = document.getElementById('courseCode')
    number.textContent = aCourse.code
    name.textContent = aCourse.name
  }

  function addSection(){
    const sectionHtm = document.getElementById('sections')
    const allSections = aCourse.sections

    for(const i of allSections){
        sectionHtm.innerHTML += `
        <tr>
        <td>${i.sectionNum}</td>
        <td>${i.roomNum}</td>
        <td>${i.enrolled}</td>
        <td>${i.days}</td>
        <td>${i.instructor}</td></tr>
        `
    }
  }
//   addSection()

  setNameNumber()

  aCourse.dropStudent()
