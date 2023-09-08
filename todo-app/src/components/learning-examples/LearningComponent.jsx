import FirstComponent from './FirstComponent.jsx'
import {FifthComponent} from './FirstComponent.jsx'
import SecondComponent from './SecondComponent.jsx'
import ThirdComponent from './ThirdComponent.jsx'
import FourthComponent from './FourthComponent.jsx'
import LearningJavaScript from './LearningJavaScript.jsx'

export default function LearningComponent() {
    return (
        <div className="LearningComponent">
        <FirstComponent/>
        <FifthComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <LearningJavaScript/>
       </div>
    )
}