import { JSONAPIStore } from './jsonapistore.js'

test('save data', () => {
  let store = new JSONAPIStore()

  expect(() => {
    store.save('url', 42)
  }).toThrow()

  expect(() => {
    store.save('url', 'data')
  }).not.toThrow()

  expect(() => {
    store.save('url2', 'data2')
  }).not.toThrow()

  expect(store.get('url')).toBe('data')
  expect(store.get('url2')).toBe('data2')

  expect(() => {
    store.delete('url')
  }).not.toThrow()

  expect(store.get('url')).toBe('')

  expect(store.get('nonexistent')).toBe('')

  expect(() => {
    store.delete('nonexistente')
  }).not.toThrow()

  expect(() => {
    store.delete('')
  }).not.toThrow()

  expect(store.reset).not.toThrow()

  expect(store.get('url2')).toBe('')
})
