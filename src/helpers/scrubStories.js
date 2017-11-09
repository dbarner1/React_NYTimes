import { titleCaseMe } from './titleCaseMe';

function scrubStories(schemaType,stories,initialKeyValue) {
  var key = initialKeyValue;
  var final_clips = [];

  switch(schemaType) {

    case 'schema_1':

      stories.map(function(clip) {
        var clip_for_mapping =  {
          "snippet": clip.abstract,
          "title": clip.title,
          "provider_id": clip._id,
          "url": clip.url,
          "img": clip.multimedia,
          "headline": clip.title,
          "byline": clip.byline,
          "datePublished": clip.published_date,
          "key": 'HomeClip_' + key + '_' + clip.provider_id + Math.floor(Math.random() * 2000000000)
        }
        key++;

        final_clips.push(clip_for_mapping);

        return true;
      })

        return final_clips;

    case 'schema_2':
      stories.map(function(clip) {
        var clip_for_mapping =  {
          "snippet": clip.snippet,
          "title": clip.headline.main,
          "provider_id": clip._id,
          "url": clip.web_url,
          "img": '',
          "headline": clip.title,
          "byline": titleCaseMe(clip.byline.original),
          "datePublished": clip.pub_date,
          "key": 'HomeClip_' + key+ '_' + clip.provider_id + Math.floor(Math.random() * 2000000000)
        }
        key++;
        final_clips.push(clip_for_mapping);

        return false;
      })
        return final_clips;

    default:
      return 'error in this request'
  }
}

export {scrubStories};
