def check_eligibility(student, criteria):
    reasons = []
    is_eligible = True

    # Check CGPA
    if student.get('cgpa', 0) < criteria.get('min_cgpa', 0):
        is_eligible = False
        reasons.append(f"CGPA {student.get('cgpa')} < {criteria.get('min_cgpa')}")
    else:
        reasons.append(f"CGPA {student.get('cgpa')} >= {criteria.get('min_cgpa')}")

    # Check Backlogs
    if student.get('backlogs', 0) > criteria.get('max_backlogs', 99):
        is_eligible = False
        reasons.append(f"Backlogs {student.get('backlogs')} > {criteria.get('max_backlogs')} allowed")
    else:
        reasons.append(f"Backlogs {student.get('backlogs')} within limit")

    # Check Branch
    allowed_branches = criteria.get('branches', [])
    if allowed_branches and student.get('branch') not in allowed_branches:
        is_eligible = False
        reasons.append(f"Branch {student.get('branch')} not in {allowed_branches}")
    elif allowed_branches:
        reasons.append(f"Branch {student.get('branch')} is allowed")

    return {
        "is_eligible": is_eligible,
        "reasons": reasons
    }
