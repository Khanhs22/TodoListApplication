const person = {
  name: 'Ranga',
  address: {
    line1: '123 Thuong Tin',
    city: 'Ha Noi',
    country: 'Viet Name'
  },
  profiles: ['facebook', 'instagram', 'twitter'],
  printProfile: () => {
    person.profiles.map(
      (profile) => console.log(profile)
    )
  }
}

export default function LearningJavaScipt() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      <div>{person.address.city}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.printProfile()}</div>
    </>
  )
}