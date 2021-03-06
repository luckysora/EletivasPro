# Generated by Django 2.2.3 on 2020-01-07 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gestao', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Gestor',
        ),
        migrations.AlterField(
            model_name='registro',
            name='aluno',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registros', to='gestao.Aluno'),
        ),
        migrations.AlterField(
            model_name='registro',
            name='eletiva',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registros', to='gestao.Eletiva'),
        ),
    ]
