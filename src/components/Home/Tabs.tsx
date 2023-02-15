import { HiOutlineSparkles } from 'react-icons/hi';
import { FiEye } from 'react-icons/fi';
import { FiBook } from 'react-icons/fi';
import { useState } from 'react';
import './tabs.css';

const tabsContent = [
  {
    button: 'Instant transfers',
    heading: 'Lorem Ipsum Glovorkem opsum sunarem olsun klokenberg',
    icon: <HiOutlineSparkles />,
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia',
  },
  {
    button: 'Strohhhhhhs Stobenhajmr',
    heading: 'Lorem Ipsum Glovorkem opsum sunarem olsun klokenberg',
    icon: <FiEye />,
    paragraph:
      ' ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia',
  },
  {
    button: 'Kloklblaster transfers',
    heading: 'Lorem klokenberg Ipsum Glovorkem  opsum olsun klokenberg',
    icon: <FiBook />,
    paragraph:
      'Explicabo ipsum Error sit ametperspiciati  consectetur voluptatibus elit. Error accusamus arcExplicaboExplictecto minus sint, s blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Exp',
  },
  {
    button: 'Strohhhhhhs Stobenhajmr',
    heading: 'Lorem Ipsum Glovorkem opsum sunarem olsun klokenberg',
    icon: <FiEye />,
    paragraph:
      ' ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia',
  },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="section-tabs">
      <div className="container-tabs">
        <header>
          <h3 className="heading-tertiary heading-tertiary-align-start">
            Operations
          </h3>
          <p className="creeds-paragraph">
            Find your perfect piece: where simplicity meets efficiency.
          </p>
        </header>
        <div className="tabs-component">
          <div className="tabs-btns-container">
            {tabsContent.map((tab, i) => {
              return (
                <button
                  className={`btn-tabs btn-tab-${i}`}
                  onClick={() => setActiveTabIndex(i)}
                >
                  <span>{tab.button}</span>
                </button>
              );
            })}
          </div>
          <div className="container-tab-content">
            <div className="tab-content-icon-div">
              <span>{tabsContent[activeTabIndex].icon}</span>
            </div>
            <h3 className="tab-content-heading">
              {tabsContent[activeTabIndex].heading}
            </h3>
            <p className="tab-content-paragraph">
              {tabsContent[activeTabIndex].paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
