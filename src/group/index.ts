// https://www.terraform.io/docs/providers/boundary/r/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Resource IDs for group members, these are most likely boundary users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/group#member_ids Group#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * The group name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/group#name Group#name}
  */
  readonly name?: string;
  /**
  * The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/group#scope_id Group#scope_id}
  */
  readonly scopeId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/group boundary_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/group boundary_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_group',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._memberIds = config.memberIds;
    this._name = config.name;
    this._scopeId = config.scopeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_ids - computed: false, optional: true, required: false
  private _memberIds?: string[]; 
  public get memberIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_ids'));
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  public resetMemberIds() {
    this._memberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
    };
  }
}
