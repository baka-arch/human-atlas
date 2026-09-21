// Offline model storage helpers. The service worker intercepts these fetches
// and stores them in the same named cache, so "Download for offline" is just
// a warmed cache. Must stay in sync with CACHE in public/sw.js.
import type {Atlas} from './anatomy';

export const OFFLINE_CACHE='bhms-atlas-v2';

/** Every URL the app needs for the 3D body — the loader fetches the .gz variant when DecompressionStream exists. */
export function modelUrls(atlas:Atlas):string[]{
 const canGzip=typeof DecompressionStream!=='undefined';
 return ['/models/atlas.json',...atlas.chunks.map(c=>canGzip&&c.gzip?c.gzip:c.url)];
}

export type OfflineStatus='unsupported'|'available'|'partial'|'missing';

export async function offlineStatus(atlas:Atlas):Promise<OfflineStatus>{
 if(typeof caches==='undefined')return 'unsupported';
 try{
  const cache=await caches.open(OFFLINE_CACHE);
  const results=await Promise.all(modelUrls(atlas).map(u=>cache.match(u)));
  const hits=results.filter(Boolean).length;
  return hits===results.length?'available':hits>0?'partial':'missing';
 }catch{return 'unsupported';}
}

/** Fetch every model URL once; the service worker puts each into the cache. */
export async function downloadModels(atlas:Atlas,onProgress:(done:number,total:number)=>void):Promise<{ok:number;failed:number}>{
 const urls=modelUrls(atlas);
 let ok=0,failed=0,done=0;
 for(const url of urls){
  try{
   const res=await fetch(url);
   if(res.ok)ok++;else failed++;
  }catch{failed++;}
  done++;
  onProgress(done,urls.length);
 }
 return {ok,failed};
}

export function estimateMb(atlas:Atlas):number{
 const canGzip=typeof DecompressionStream!=='undefined';
 const bytes=atlas.chunks.reduce((sum,c)=>sum+(canGzip&&c.gzipBytes?c.gzipBytes:c.bytes),0);
 return Math.round(bytes/1e6);
}
