// ImageResponse
// The ImageResponse constructor allows you to generate dynamic images using JSX 
// and CSS. This is useful for generating social media images such as Open Graph 
// images, Twitter cards, and more.

// The following options are available for ImageResponse:
import { ImageResponse } from 'next/og'
 
new ImageResponse(
  element: ReactElement,
  options: {
    width?: number = 1200
    height?: number = 630
    emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' = 'twemoji',
    fonts?: {
      name: string,
      data: ArrayBuffer,
      weight: number,
      style: 'normal' | 'italic'
    }[]
    debug?: boolean = false
    // Options that will be passed to the HTTP response
    status?: number = 200
    statusText?: string
    headers?: Record<string, string>
  },
)
// Supported CSS Properties
// Please refer to Satori’s documentation for a list of supported HTML and 
// CSS features.
