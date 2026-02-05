from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class BasicModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(team_id='testteam', name='Test Team')
        self.assertEqual(team.name, 'Test Team')

    def test_user_creation(self):
        team = Team.objects.create(team_id='testteam', name='Test Team')
        user = User.objects.create_user(username='testuser', email='test@example.com', team_id=team.team_id)
        self.assertEqual(user.team_id, team.team_id)

    def test_activity_creation(self):
        user = User.objects.create_user(username='testuser', email='test@example.com')
        activity = Activity.objects.create(user_id=user.id, type='run', duration=10)
        self.assertEqual(activity.type, 'run')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='Test Desc')
        self.assertEqual(workout.name, 'Test Workout')

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(team_id='testteam', points=50)
        self.assertEqual(leaderboard.points, 50)
