import React from 'react'
import ReactDOM from 'react-dom/client'
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"

function App() {
  return (
    <main>
      <h2>Badges</h2>
      <section className="badge-container">
        <Badge color="gray" shape="square">Badge</Badge>
        <Badge color="red" shape="square">Badge</Badge>
        <Badge color="yellow" shape="square">Badge</Badge>
        <Badge color="green" shape="square">Badge</Badge>
        <Badge color="blue" shape="square">Badge</Badge>
        <Badge color="indigo" shape="square">Badge</Badge>
        <Badge color="purple" shape="square">Badge</Badge>
        <Badge color="pink" shape="square">Badge</Badge>
        <Badge shape="square">Badge</Badge>
        
        <Badge color="gray" shape="pill">Badge</Badge>
        <Badge color="red" shape="pill">Badge</Badge>
        <Badge color="yellow" shape="pill">Badge</Badge>
        <Badge color="green" shape="pill">Badge</Badge>
        <Badge color="blue" shape="pill">Badge</Badge>
        <Badge color="indigo" shape="pill">Badge</Badge>
        <Badge color="purple" shape="pill">Badge</Badge>
        <Badge color="pink" shape="pill">Badge</Badge>
        <Badge>Badge</Badge>
      </section>

      <h2>Banners</h2>
      <section className="banner-container">
        <Banner type="success" line="multiline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        <Banner type="warning" line="multiline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>
        <Banner type="error" line="multiline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>
        <Banner type="neutral" line="multiline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        
        <Banner type="success" line="singleline" />
        <Banner type="warning" line="singleline" />
        <Banner type="error" line="singleline" />
        <Banner type="neutral" line="singleline" />
      </section>
      
      <h2>Cards</h2>
      <section className="card-container">
        <Card title="Easy Deployment">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card>
        <Card title="Simple Deployment">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis dim sum choi.
        </Card>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
