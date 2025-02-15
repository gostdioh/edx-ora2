"""Default data initializations for the XBlock, with formatting preserved."""
# pylint: disable=line-too-long

DEFAULT_PROMPT = """
    Censorship in the Libraries

    'All of us can think of a book that we hope none of our children or any other children have taken off the shelf. But if I have the right to remove that book from the shelf -- that work I abhor -- then you also have exactly the same right and so does everyone else. And then we have no books left on the shelf for any of us.' --Katherine Paterson, Author

    Write a persuasive essay to a newspaper reflecting your views on censorship in libraries. Do you believe that certain materials, such as books, music, movies, magazines, etc., should be removed from the shelves if they are found offensive? Support your position with convincing arguments from your own experience, observations, and/or reading.

    Read for conciseness, clarity of thought, and form.
"""  # nopep8

DEFAULT_RUBRIC_CRITERIA = [
    {
        'name': "Ideas",
        'label': "Ideas",
        'prompt': "Determine if there is a unifying theme or main idea.",
        'quick': "20,10,0",
        'order_num': 0,
        'feedback': 'optional',
   
    },
 
]

# The rubric's feedback prompt is a set of instructions letting the student
# know they can provide additional free form feedback in their assessment.
DEFAULT_RUBRIC_FEEDBACK_PROMPT = """
(Optional) What aspects of this response stood out to you? What did it do well? How could it be improved?
"""

# The rubric's feedback text is the default text displayed and used as
# the student's response to the feedback prompt
DEFAULT_RUBRIC_FEEDBACK_TEXT = """
I think that this response...
"""

DEFAULT_EXAMPLE_ANSWER = (
    "Replace this text with your own sample response for this assignment. "
    "Then, under Response Score to the right, select an option for each criterion. "
    "Learners practice performing peer assessments by assessing this response and comparing "
    "the options that they select in the rubric with the options that you specified."
)

DEFAULT_EXAMPLE_ANSWER_2 = (
    "Replace this text with another sample response, "
    "and then specify the options that you would select for this response."
)

DEFAULT_STUDENT_TRAINING = {
    "name": "student-training",
    "start": None,
    "due": None,
    "examples": [
        {
            "answer": DEFAULT_EXAMPLE_ANSWER,
            "options_selected": [
                {
                    "criterion": "Ideas",
                    "option": "Fair"
                },
                {
                    "criterion": "Content",
                    "option": "Good"
                }
            ]
        },
        {
            "answer": DEFAULT_EXAMPLE_ANSWER_2,
            "options_selected": [
                {
                    "criterion": "Ideas",
                    "option": "Poor"
                },
                {
                    "criterion": "Content",
                    "option": "Good"
                }
            ]
        }
    ]
}

DEFAULT_START = "2001-01-01T00:00"
DEFAULT_DUE = "2029-01-01T00:00"

# The Default Peer Assessment is created as an example of how this XBlock can be
# configured. If no configuration is specified, this is the default assessment
# module(s) associated with the XBlock.
DEFAULT_PEER_ASSESSMENT = {
    "name": "peer-assessment",
    "start": DEFAULT_START,
    "due": DEFAULT_DUE,
    "must_grade": 1,
    "must_be_graded_by": 1,
    "enable_flexible_grading": False,
    "flexible_grading_days": 7,
    "flexible_grading_graded_by_percentage": 30
}

DEFAULT_SELF_ASSESSMENT = {
    "name": "self-assessment",
    "start": DEFAULT_START,
    "due": DEFAULT_DUE,
}

DEFAULT_STAFF_ASSESSMENT = {
    "name": "staff-assessment",
    "start": DEFAULT_START,
    "due": DEFAULT_DUE,
    "required": False,
}

ACTIVE_STAFF_ASSESSMENT = {
    "name": "staff-assessment",
    "start": DEFAULT_START,
    "due": DEFAULT_DUE,
    "required": True,
}

DEFAULT_ASSESSMENT_MODULES = [
    DEFAULT_STUDENT_TRAINING,
    DEFAULT_PEER_ASSESSMENT,
    DEFAULT_SELF_ASSESSMENT,
    DEFAULT_STAFF_ASSESSMENT,
]

DEFAULT_EDITOR_ASSESSMENTS_ORDER = [
    "student-training",
    "peer-assessment",
    "self-assessment",
    "staff-assessment",
]

BLANK_ASSESSMENT_MODULES = []

SELF_ASSESSMENT_MODULES = [
    DEFAULT_SELF_ASSESSMENT,
]

PEER_ASSESSMENT_MODULES = [
    DEFAULT_PEER_ASSESSMENT,
]

STAFF_ASSESSMENT_MODULES = [
    ACTIVE_STAFF_ASSESSMENT,
]

SELF_TO_PEER_ASSESSMENT_MODULES = [
    DEFAULT_STUDENT_TRAINING,
    DEFAULT_SELF_ASSESSMENT,
    DEFAULT_PEER_ASSESSMENT,
]

SELF_TO_STAFF_ASSESSMENT_MODULES = [
    DEFAULT_SELF_ASSESSMENT,
    ACTIVE_STAFF_ASSESSMENT,
]
