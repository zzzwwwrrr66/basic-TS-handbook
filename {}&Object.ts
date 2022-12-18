{
  // ▼typescript@4.8 버전 이상 
  // Object, {} 는 모든타입을 뜻한다. 단 undefined, null 제외 
  // unknown = {} | null | undefined

  type All = {};
  type All2 = Object;
  
  const a:All = 1;
  const b:All = "1";
  const c:All = [];
  const d:All = {};
  const wooramMarried:All = true;

}