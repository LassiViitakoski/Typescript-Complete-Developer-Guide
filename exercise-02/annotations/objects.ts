const profile = {
    firstname: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, firstname }: { age: number; firstname: string } = profile;

//const { lat, lng }: { lat: number, lng: number } = profile.coords;
const {
    coords: { lat, lng }
}: { coords: { lat: number; lng: number }} = profile;
console.log(lng);
console.log(firstname);