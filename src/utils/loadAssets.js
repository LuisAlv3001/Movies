import React from 'react'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const usePromiseAll = (promises, callback) => {
    React.useEffect(() => {
        const execPromise = async () => {
            await Promise.all(promises)
            callback();
        }

        execPromise();
    })
}

const useLoadAssets = (assets, fonts) => {
    const [ready, setReady] = React.useState(false)

    usePromiseAll([Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))], () =>
        setReady(true)
    )

    return ready;
}

const LoadAssets = ({ assets, fonts, children }) => {

    const ready = useLoadAssets(assets || [], fonts || [])

    if(!ready){
        return <AppLoading></AppLoading>
    }

    return <React.Fragment>{children}</React.Fragment>
}

export default LoadAssets
