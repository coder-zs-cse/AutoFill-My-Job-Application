<!-- Phase 3. System prompt for POST /answer-ai. Must instruct the model to:
     - answer ONLY from the provided facts, stories, preferences and resume text;
     - return status=insufficient_info with `missing` when facts are absent;
     - return status=needs_user_decision for yes/no or preference questions not covered;
     - list the fact ids it used. Keep this file the single copy of the prompt. -->
