// class MilitaryResource {
//     constructor(type, health, distance) {
//         this.type = type;
//         this.health = health;
//         this.maxHealth = 100;
//         this.distance = distance;
//         this.maxDistance = 1000;
//     }
//     isReadyToMove() {
//         console.log('Ready to move');
//     }
//     isReadyToFight() {
//         console.log('Ready to fight');
//     }
//     restore() {
//         this.health = this.maxHealth;
//     };
//     clone() {
//         return new MilitaryResource(this.type, this.health, this.distance);
//     };
//  }
 
// const first = new MilitaryResource("infantryman", 80, 100);
// console.log(first);

// // first.restore();
// // console.log(first);


// const first2 = first.clone();
// first2.restore();
// console.log(first2);
 
 
// class Squad extends MilitaryResource {
//     constructor(defaultResources){
//         super();
//         this.squad = [];
//         if (defaultResources) this.combineResources(defaultResources);
//     }
//     restoreAll() {
//         this.forEach(element => {
//             this.restore();
//         });
//     };
//     getReadyToMoveResources() {
//         this.isReadyToMove();
//     };
//     combineResources(a) {
//         this.squad.push(a);
//     };
//     // cloneResource(resourseClone) {
//     //     let resourseClone = new Squad
//     // };
//  }
 
//  const party = new Squad(first);
// //  party.combineResources(first2);
//  console.log(party);

const units = [new Unit('Virus', 200, 500)];
units.push(units[0].clone());

const squad = new Squad(units);
console.log(squad);




