import * as fs from 'fs'
import transform from '../src'

it('example', () => {
    const fixture = fs.readFileSync('./__fixtures__/foo', 'utf8')
    const actual = transform(fixture)
    expect(actual).toBe(`export default "foo"`)
})
