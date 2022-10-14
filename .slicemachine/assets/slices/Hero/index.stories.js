import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"herobuttontext":"Grab a Copy","herobuttonlink":{"link_type":"Web","url":"#"},"herobuttonstyle":"Solid","herobuttonripple":true}],"primary":{"heroheadline":"The best book in town","heroheadlinespan":"is MY book!"},"slice_type":"hero","id":"_Default"}} />
_Default.storyName = ''

export const _HeroWithImage = () => <MyComponent slice={{"variation":"heroWithImage","version":"sktwi1xtmkfgx8626","items":[{"herobuttontext":"Button Text","herobuttonlink":{"link_type":"Web","url":"https://prismic.io"},"herobuttonstyle":"Rounded Outline","herobuttonripple":true}],"primary":{"heroheadline":"This is a Hero Slice","heroheadlinespan":"with an Image.","heroimage":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1520848315518-b991dd16a625"},"heroimagelocation":false},"slice_type":"hero","id":"_HeroWithImage"}} />
_HeroWithImage.storyName = ''

export const _HeroWithBackgroundImage = () => <MyComponent slice={{"variation":"heroWithBackgroundImage","version":"sktwi1xtmkfgx8626","items":[{"herobuttontext":"usually","herobuttonlink":{"link_type":"Web","url":"http://google.com"},"herobuttonstyle":"Solid","herobuttonripple":true}],"primary":{"heroheadline":"Hero with ","heroheadlinespan":"Background Image","herobackgroundimage":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f"}},"slice_type":"hero","id":"_HeroWithBackgroundImage"}} />
_HeroWithBackgroundImage.storyName = ''
