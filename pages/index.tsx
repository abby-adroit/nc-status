import type { NextPage } from 'next'
import Layout from '../src/components/Layout'
import HomeView from '../src/views/HomeView'

const Home: NextPage = () => {
  return (
    <HomeView title={"HOME"}>
      <Layout/>
    </HomeView>
  )
}

export default Home
