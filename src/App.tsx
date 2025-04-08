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
            {(['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] as const).map(
              color => (
                <Badge key={`square-${color}`} color={color} shape="square">
                  Badge
                </Badge>
              )
            )}
            <Badge shape="square">Badge</Badge>

            <Badge color="gray" shape="pill">
              <Badge.Label label="Custom Badge Text" />
            </Badge>

            {(['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] as const).map(
              color => (
                <Badge key={`pill-${color}`} color={color} shape="pill">
                  Badge
                </Badge>
              )
            )}
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
            {(['warning', 'error', 'neutral'] as const).map(type => (
              <Banner key={`single-${type}`} type={type} line="singleline" />
            ))}
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
