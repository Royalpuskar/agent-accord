// Local proposal policy reference, not an Agentic Web runtime.
const allowed=new Set(['read','draft','send','delete']);
export function decide(proposal){
 if(!proposal||!allowed.has(proposal.action)||typeof proposal.id!=='string'||!proposal.id.trim())return {status:'denied',reason:'Invalid proposal'};
 if(proposal.action==='delete')return {status:'denied',reason:'Destructive actions disabled'};
 if(proposal.action==='send')return {status:'approval_required',reason:'External communication requires human approval'};
 return {status:'allowed',reason:'Local read or draft only'};
}
