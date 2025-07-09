import { LoaderContext } from './LoaderContext'
import { useState } from 'react'

export function LoaderProvider ({ children }) {
  const [loading, setLoading] = useState(false)

  const showLoader = () => setLoading(true)
  const hideLoader = () => setLoading(false)

  return(
        <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-peach border-t-transparent"></div>
        </div>
      )}
    </LoaderContext.Provider>
  )
}