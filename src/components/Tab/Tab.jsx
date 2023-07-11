import { useState } from "react"
import Todo from '../../components/Todo/Todo'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm'
import "./Tab.css"

function Tabs({ userData, updateUserData }) {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="tabContainer">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <h5>To-dos</h5>
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <h5>Personal Info</h5>
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <Todo userData={userData} />
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <ProfileCard userData={userData} updateUserData={updateUserData} />
                </div>
            </div>
        </div>
    )
}

export default Tabs