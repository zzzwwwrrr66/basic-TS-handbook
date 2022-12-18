{
  // unknown 은 아직 타입을 정하지 않았고, 선언할때 type 을 지정하겠단 뜻이다 
  // :, interface, type, <generic>, as 는 실제 JS 에서 사라진다
  const a = '1' as unknown as number;
}