from typing import List, Optional
from XAgent.xagent import XAgent

from agents.agent_simulations.agent.dialogue_agent import DialogueAgent
from agents.conversational.output_parser import ConvoOutputParser
from config import Config
from memory.zep.zep_memory import ZepMemory
from services.run_log import RunLogsManager
from typings.agent import AgentWithConfigsOutput



class DialogueAgentWithTools(DialogueAgent):
    def __init__(self, name, agent_with_configs, session_id, sender_name, is_memory=False):
        super().__init__(name, agent_with_configs)
        self.session_id = session_id
        self.sender_name = sender_name
        self.is_memory = is_memory

    def send(self) -> str:
        task_description = "Updated"
        result = run_xagent(task_description)
        return result
