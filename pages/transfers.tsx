import type { NextPage } from 'next'
import HeroHead from '../components/HeroHead'
import TransferKlay from '../components/History'

const Transfers: NextPage = () => {
  return (<>
    <HeroHead heroText="Transfers" />
    <div className="mt-2">
      <TransferKlay />
    </div>
  </>
  )
}

export default Transfers
