import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

// temporaly as const...
// ids are added manually for this version...
// http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?Krakow&tagmode=any&format=json

const IMAGES = [
	   {
      "id": 1,
			"title": "Europe 2018",
      "category": "tourism",
			"link": "http:\/\/www.flickr.com\/photos\/135306144@N03\/27479518497\/",
			"media": {"m":"http:\/\/farm2.staticflickr.com\/1728\/27479518497_ff95553b79_m.jpg"},
			"date_taken": "2018-04-06T23:27:13-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/135306144@N03\/\">mollylaurenbarry<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/135306144@N03\/27479518497\/\" title=\"Europe 2018\"><img src=\"http:\/\/farm2.staticflickr.com\/1728\/27479518497_ff95553b79_m.jpg\" width=\"160\" height=\"240\" alt=\"Europe 2018\" \/><\/a><\/p> ",
			"published": "2018-05-25T18:32:32Z",
			"author": "nobody@flickr.com (\"mollylaurenbarry\")",
			"author_id": "135306144@N03",
			"tags": ""
	   },
	   {
      "id": 2,
			"title": "Just a dog",
      "category": "dogs",
			"link": "http:\/\/www.flickr.com\/photos\/164826058@N08\/27479519637\/",
			"media": {"m":"http:\/\/farm2.staticflickr.com\/1734\/27479519637_a5c8f300b2_m.jpg"},
			"date_taken": "2018-03-26T09:14:53-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/164826058@N08\/\">agustinacandiba<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/164826058@N08\/27479519637\/\" title=\" \"><img src=\"http:\/\/farm2.staticflickr.com\/1734\/27479519637_a5c8f300b2_m.jpg\" width=\"240\" height=\"180\" alt=\" \" \/><\/a><\/p> ",
			"published": "2018-05-25T18:32:35Z",
			"author": "nobody@flickr.com (\"agustinacandiba\")",
			"author_id": "164826058@N08",
			"tags": ""
	   },
	   {
      "id": 3,
			"title": "Forum PA 2018",
      "category": "people",
			"link": "http:\/\/www.flickr.com\/photos\/forumpa\/27479523127\/",
			"media": {"m":"http:\/\/farm2.staticflickr.com\/1733\/27479523127_2b050b5181_m.jpg"},
			"date_taken": "2018-05-23T11:48:36-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/forumpa\/\">FPA S.r.l<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/forumpa\/27479523127\/\" title=\"Forum PA 2018\"><img src=\"http:\/\/farm2.staticflickr.com\/1733\/27479523127_2b050b5181_m.jpg\" width=\"240\" height=\"160\" alt=\"Forum PA 2018\" \/><\/a><\/p> <p>23 maggio 2018 - Foto di Rina Ciampolillo<\/p>",
			"published": "2018-05-25T18:32:43Z",
			"author": "nobody@flickr.com (\"FPA S.r.l\")",
			"author_id": "26475712@N05",
			"tags": "trasformazionedigitaledellapa 23maggio2018 forumpa18"
	   },
	   {
      "id": 4,
			"title": "SB-O88cRx-003807",
      "category": "tourism",
			"link": "http:\/\/www.flickr.com\/photos\/andrewmurrayvineyards\/27479525287\/",
			"media": {"m":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rynek_Glowny_w_Krakowie.jpg/242px-Rynek_Glowny_w_Krakowie.jpg"},
			"date_taken": "2018-05-25T11:32:47-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/andrewmurrayvineyards\/\">Andrew Murray Vineyards<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/andrewmurrayvineyards\/27479525287\/\" title=\"SB-O88cRx-003807\"><img src=\"http:\/\/farm2.staticflickr.com\/1741\/27479525287_04473df104_m.jpg\" width=\"180\" height=\"240\" alt=\"SB-O88cRx-003807\" \/><\/a><\/p> <p>AMV Selfie Booth<\/p>",
			"published": "2018-05-25T18:32:47Z",
			"author": "nobody@flickr.com (\"Andrew Murray Vineyards\")",
			"author_id": "64019955@N05",
			"tags": "amvwine"
	   },
	   {
      "id": 5,
			"title": "I love the approach to SFO...",
      "category": "tourism",
			"link": "http:\/\/www.flickr.com\/photos\/sleovideo\/27479525777\/",
			"media": {"m":"http:\/\/farm1.staticflickr.com\/969\/27479525777_f967a86b2f_m.jpg"},
			"date_taken": "2018-05-25T14:32:49-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/sleovideo\/\">S Leo Video<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/sleovideo\/27479525777\/\" title=\"I love the approach to SFO... #california #ptk_vehicles #forahappymoment #planephotography #megaplane #iphoneonly #aviationlife #ig_masterpiece #wildbayare #onlyin\" \/><\/a><\/p> <p>via Instagram <a href=\"https:\/\/ift.tt\/2GPTqpk\" rel=\"nofollow\">ift.tt\/2GPTqpk<\/a> I love the approach to SFO<\/p>",
			"published": "2018-05-25T18:32:49Z",
			"author": "nobody@flickr.com (\"S Leo Video\")",
			"author_id": "99300531@N02",
			"tags": "sleovideo i love approach sfo instagramaviation travelog instaaviation aroundtheworldpix exploringtheglobe california ptkvehicles forahappymoment planephotography megaplane iphoneonly aviationlife igmasterpiece wildbayare onlyinsf iphonesia iphoneography campinassp theglobewanderer visitcalifornia instapassport instaplane airplane54 flashesofdelight mytinyatlas aviationphotography visualmobs igerssf streetsofsf"
	   },
	   {
      "id": 6,
			"title": "The Bamboo Forest at Arishiyama",
      "category": "nature",
			"link": "http:\/\/www.flickr.com\/photos\/160739067@N08\/27479526757\/",
			"media": {"m":"http:\/\/farm1.staticflickr.com\/967\/27479526757_6633bc3759_m.jpg"},
			"date_taken": "2018-05-25T11:32:50-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/160739067@N08\/\">lewissuraz<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/160739067@N08\/27479526757\/\" title=\"The Bamboo Forest at Arishiyama\"><img src=\"http:\/\/farm1.staticflickr.com\/967\/27479526757_6633bc3759_m.jpg\" width=\"240\" height=\"126\" alt=\"The Bamboo Forest at Arishiyama\" \/><\/a><\/p> <p>Arashiyama is a district on the western outskirts of Kyoto, Japan. It also refers to the mountain across the \u014ci River, which forms a back... click here to more details : <a href=\"http:\/\/bit.ly\/2KWsDtF\" rel=\"nofollow\">bit.ly\/2KWsDtF<\/a><\/p>",
			"published": "2018-05-25T18:32:50Z",
			"author": "nobody@flickr.com (\"lewissuraz\")",
			"author_id": "160739067@N08",
			"tags": "beauty fashion fat loss fitness food health home decor makeup pets tattoo technology travel"
	   },
	   {
      "id": 7,
			"title": "2018-05-25_07-32-35",
      "category": "tourism",
			"link": "http:\/\/www.flickr.com\/photos\/153013829@N08\/28475632768\/",
			"media": {"m":"http:\/\/farm2.staticflickr.com\/1725\/28475632768_f8c0c98c42_m.jpg"},
			"date_taken": "2018-05-25T19:32:21-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/153013829@N08\/\">cyturner<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/153013829@N08\/28475632768\/\" title=\"2018-05-25_07-32-35\"><img src=\"http:\/\/farm2.staticflickr.com\/1725\/28475632768_f8c0c98c42_m.jpg\" width=\"180\" height=\"240\" alt=\"2018-05-25_07-32-35\" \/><\/a><\/p> ",
			"published": "2018-05-25T18:32:45Z",
			"author": "nobody@flickr.com (\"cyturner\")",
			"author_id": "153013829@N08",
			"tags": ""
	   },
	   {
      "id": 8,
			"title": "Un d\u00eda en el museo",
      "category": "tourism",
			"link": "http:\/\/www.flickr.com\/photos\/eriaaire\/28475633748\/",
			"media": {"m":"http:\/\/farm2.staticflickr.com\/1722\/28475633748_dd80b05069_m.jpg"},
			"date_taken": "2018-05-25T13:06:22-08:00",
			"description": " <p><a href=\"http:\/\/www.flickr.com\/people\/eriaaire\/\">EriA-AirE<\/a> posted a photo:<\/p> <p><a href=\"http:\/\/www.flickr.com\/photos\/eriaaire\/28475633748\/\" title=\"Un d\u00eda en el museo\"><img src=\"http:\/\/farm2.staticflickr.com\/1722\/28475633748_dd80b05069_m.jpg\" width=\"180\" height=\"240\" alt=\"Un d\u00eda en el museo\" \/><\/a><\/p> ",
			"published": "2018-05-25T18:32:52Z",
			"author": "nobody@flickr.com (\"EriA-AirE\")",
			"author_id": "25837628@N06",
			"tags": ""
	   }
  ];
