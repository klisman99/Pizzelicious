interface RootLayoutInterface {
  children: React.ReactNode
}

export const metadata = {
  title: "Pizzeria",
  description: "Let's eat some good food!",
}

export default ({ children, }: RootLayoutInterface) => (
    <html lang="en">
      <body>{children}</body>
    </html>
)