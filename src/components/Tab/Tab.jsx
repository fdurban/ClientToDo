import { useState } from "react"
import Todo from '../../components/Todo/Todo'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import "./Tab.css"

function Tabs({ userData }) {

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
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <h5>Edit Info</h5>
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                 <Todo />

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <ProfileCard userData={userData} />
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Content 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tabs