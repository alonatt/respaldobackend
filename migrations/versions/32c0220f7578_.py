"""empty message

Revision ID: 32c0220f7578
Revises: 4c1bd85a5d2e
Create Date: 2021-09-25 00:41:27.610749

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32c0220f7578'
down_revision = '4c1bd85a5d2e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'encomiendas', ['id_package'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'encomiendas', type_='unique')
    # ### end Alembic commands ###
