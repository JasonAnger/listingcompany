const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: 'dl1tmeq6',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skGyvqBjtYTeqvTNx6PmmZr434vFIOL0RQ2mX8HvSBIiVgZM7MBvSEeafmGWsbcgC9ZzClOE70QABMsg9qMZ2RfC4QN8z5yOQOSF2TmIkXVFLqaDosFICAO6am8HiMAjufNbcKkg6iwBKDFZ8PXOz1mWdJWln4UIYgjTVUxwKzcT33IIM1dY', 
  //'skNTHqZL5YaiCKnt1INAyJ7Cju1F13HWBa9eXK2GFWIFrWSVwp43OhuYEhD3UHg7qPGCMhHaSpjehxnFb5OQNy7hNi431qTDodOKBIBU37Y62Z3RZExTcWxFmb1LclDgZDHMIYm9vKWwuvKh2SUGcRkBcAvXDSYcSsckb3DVo5kchjN2afaz', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})