import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Badge, Banner, Card, ThemeToggle, ThemedWrapper } from './components'
import { FiAperture } from 'react-icons/fi'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedWrapper>
        <ThemeToggle />
        <main>
          <section className="badge-container">
            <Badge color="gray" shape="square">
              Badge
            </Badge>
            <Badge color="red" shape="square">
              Badge
            </Badge>
            <Badge color="yellow" shape="square">
              Badge
            </Badge>
            <Badge color="green" shape="square">
              Badge
            </Badge>
            <Badge color="blue" shape="square">
              Badge
            </Badge>
            <Badge color="indigo" shape="square">
              Badge
            </Badge>
            <Badge color="purple" shape="square">
              Badge
            </Badge>
            <Badge color="pink" shape="square">
              Badge
            </Badge>
            <Badge shape="square">Badge</Badge>
            
            <Badge color="gray" shape="pill">
              <Badge.Label label="Custom Badge Text" />
            </Badge>
            
            <Badge color="red" shape="pill">
              Badge
            </Badge>
            <Badge color="yellow" shape="pill">
              Badge
            </Badge>
            <Badge color="green" shape="pill">
              Badge
            </Badge>
            <Badge color="blue" shape="pill">
              Badge
            </Badge>
            <Badge color="indigo" shape="pill">
              Badge
            </Badge>
            <Badge color="purple" shape="pill">
              Badge
            </Badge>
            <Badge color="pink" shape="pill">
              Badge
            </Badge>
            <Badge>Badge</Badge>
          </section>

          <section className="banner-container">
            <Banner type="success" line="multiline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
              similique veniam.
            </Banner>
            <Banner type="warning" line="multiline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
              similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner type="error" line="multiline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
              similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner type="neutral" line="multiline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
              similique veniam.
            </Banner>

            <Banner type="success" line="singleline" message="Custom success message" />
            <Banner type="warning" line="singleline" />
            <Banner type="error" line="singleline" />
            <Banner type="neutral" line="singleline" />
          </section>

          <section className="card-container">
            <Card title="Easy Deployment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo.
            </Card>
            <Card title="Security First" icon={<FiAperture size={52} aria-hidden="true" />}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid eveniet quia facilis
              natus eum eaque ullam sapiente possimus mollitia itaque.
            </Card>
          </section>
        </main>
      </ThemedWrapper>
    </ThemeProvider>
  )
}

export default App
